import React, { useState, useEffect } from 'react';
import { Modal, Alert, FlatList } from 'react-native';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { DropCategories } from '../../components/DropCategories';
import { MenuFoods } from '../../components/MenuFoods';
import { RequestFood } from '../../components/RequestFood';

import { useTheme } from 'styled-components';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '../../routes/scene-name';

import { api } from '../../service/api';

import {
  Container,
  Header,
  Main,
  ButtonCancel,
  IconDelete,
  BoxNameIcon,
  ButtonFoods,
  Foods,
  IconFeather,
  IconMaterial,
  WrapperOptions,
  WrapperQuantity,
  InputQuantity,
  ButtonAdd,
  Footer,
} from './styles';

interface Props {
  orderNumber: string;
  order_id: string;
}

export interface ICategory {
  name: string;
  id: string;
}

export interface IProduct {
  name: string;
  id: string;
  description: string;
  banner: string;
  price: string;
}

export interface IProductSelected {
  name: string;
  id: string;
  description: string;
  price: string;
}


export interface IRequest {
  id: string;
  product_id: string;
  name: string;
  amount: string | number;
  description: string;
}

export function OrderDetails() {
  const theme = useTheme();
  const { params } = useRoute();
  const navigation = useNavigation();
  const { orderNumber, order_id } = params as Props;
  
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleDrop, setVisibleDrop] = useState(false);


  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [categorySelected, setCategorySelected] = useState({} as ICategory);

  const [product, setProduct] = useState<IProduct[] | []>([]);
  const [productSelected, setProductSelected] = useState({} as IProductSelected);

  const [requests, setRequests] = useState<IRequest[]>([]);



  const [amount, setAmount] = useState('1');


  async function handleDeleteOrder() {
    try {
    const response = await api.delete('/order', {
      params: {
        order_id: order_id,
      }
    })
      navigation.goBack();
    } catch (error) {
        console.log(error);
        Alert.alert("Não foi possível fechar a mesa.")
    }
  }


  function finishRequest(){
    navigation.navigate(SceneName.FinishOrder);
  }

  async function handleAdd(){
    
    const response = await api.post('/order/add', {
      order_id: order_id,
      product_id: productSelected?.id as string,
      amount: Number(amount)
    })

    let data  = {
      id: response.data.id,
      product_id: productSelected?.id as string,
      name: productSelected?.name as string,
      amount: amount,
      description: productSelected?.description as string

    }
    
    setRequests(oldArray => [...oldArray, data]);


  }


  useEffect(() => {
    async function getCategories(){
      
      const response = await api.get('/category');

      setCategories(response.data);
      setCategorySelected(response.data[0]);

    }

    getCategories()

  },[])

  useEffect(() => { 
    async function getProductsSelected(){ 
      const response = await api.get('category/product', {
        params: {
          category_id: categorySelected.id,
        }
      })

      setProduct(response.data);
      setProductSelected(response.data[0]);

    }

    getProductsSelected();


  }, [categorySelected])


  return (
    <Container>
      <Header>

        <Text size={22}>Aberta a mesa {orderNumber}</Text>

        <ButtonCancel onPress={handleDeleteOrder}>
          <IconDelete name="trash" />
        </ButtonCancel>

      </Header>


      <Main>
        <WrapperOptions>
          <Text size={18}>Selecione a categoria do produto 👇🏼</Text>


          {categories.length !== 0 && (

          <ButtonFoods onPress={() => setVisibleDrop(true)}>
              <Foods>{categorySelected?.name}</Foods>
            <IconFeather name="chevron-down" />
          </ButtonFoods>
          )}
        </WrapperOptions>


        <WrapperOptions>
          <Text size={18}>Selecione qual é o produto 🍔 </Text>

          {product.length !== 0 && (
          <ButtonFoods onPress={() => setVisibleMenu(true)}>
            <BoxNameIcon>
              <IconMaterial name='fastfood' />
              <Foods>{productSelected.name}</Foods>
            </BoxNameIcon>
            <IconFeather name="chevron-down" />
          </ButtonFoods>
          )}
        </WrapperOptions>


        <WrapperQuantity>
          <Text size={18}>Quantidade : </Text>
          <InputQuantity
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
          />
        </WrapperQuantity>

        <ButtonAdd
          onPress={handleAdd}
        >
          <Text size={22} color={theme.colors.background}>+</Text>
        </ButtonAdd>

        <FlatList 
          data={requests}
          style={{flex: 1, marginTop: 24}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem = {({ item }) => (
            <RequestFood 
              data={item}
            />
          )}

        />



      </Main>

      <Footer>
        <Button 
          title="Finalizar mesa"
          onPress={finishRequest}
          backgroundColor={theme.colors.secondary}
          width={200}
          fontSize={17}
          icon={true}
        />
      </Footer>

      <Modal
        visible={visibleMenu}
        presentationStyle="pageSheet"
        animationType='fade'
        onRequestClose={() => setVisibleMenu(false)}
      >

        <MenuFoods 
        product={product}
        setProductSelected={setProductSelected}
        setVisibleMenu={() => setVisibleMenu(false)}

        />

      </Modal>

      <Modal
        visible={visibleDrop}
        transparent={true}
        animationType='fade'
      >

        <DropCategories 
        categories={categories} 
        setVisibleDrop={() => setVisibleDrop(false)}
        setCategorySelected={setCategorySelected}
        />

      </Modal>

    </Container>
  );
}