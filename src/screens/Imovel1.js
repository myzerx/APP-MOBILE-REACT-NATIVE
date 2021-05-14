import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Imovel1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}> 

      <ScrollView>
        
        <View style={{margin:10}}>
          <Image 
            source={require('../images/Casa.png')} 
            style={styles.logo}
          /> 
        </View>
        
        <View style={styles.container}>      
          <Text style={{fontWeight: "bold"}}>
            Casa à venda em Pinheiros !
            {"\n"}{"\n"}
          </Text>
          <Text>
            Casa de campo na cidade, com 415 m² , com 1 dormitório, sala, banheiro, cozinha e área de serviço. Possui garagem coberta para um carro.
            {"\n"}{"\n"}
            Localização: Condomínio Residencial Village D'Avignon - Sorocaba/SP, Casa charmosa, em condomínio muito agradável e arborizado em meio a natureza. 
            {"\n"}{"\n"} 
            Estrutura: 4 quartos, 2 suítes, 5 banheiros e 2 vagas para veículos.

            {"\n"}{"\n"}
          </Text>

          <Button
            title="Voltar."
            onPress={() =>
              this.props.navigation.navigate('Home')
            } 
          />
        </View>
      
      </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffs',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      margin:20,
      height:400,
    },
    logo:{
      width: 335,
      height:100,
      resizeMode:'contain',
    }
  });

export default Imovel1;