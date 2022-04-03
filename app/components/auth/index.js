/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { StyleSheet,View, Text, ActivityIndicator, ScrollView } from 'react-native';
 import AuthLogo from './authLogo';
 import AuthForm from './authForm';
 import {getTokens,setTokens} from '../../utils/misc';
 import {autoSignIn} from '../../store/actions/user_actions';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';



 
 class AuthComponent extends Component{

  state = {
    loading: false
  }

  goWithoutLogin = () => {
    this.props.navigation.navigate("AppTabComponent")
  }

  componentDidMount(){
    /*
    value......
           ['@my_diary_app@userId','asdf....']
           ['@my_diary_app@token','tqadf...']
           ['@my_diary_app@refToken','asdfqer....']
    */
    getTokens((value)=>{

      console.log("getTiken")
      //토큰값이 null이라면 로그인 화면으로 가도록 
      if(value[1][1] === null){
        this.setState({loading:false})
      }else{
        this.props.autoSignIn(value[2][1]).then(()=>{ 
          if(!this.props.User.auth.token){ //refressh토큰을 못받아온 경우 
            console.log("토큰 못받아옴 ")
            this.setState({loading:false})
          }else{
            console.log("메인 화면으로 ==== " + this.props.User.auth);
            setTokens(this.props.User.auth,()=>{
              this.goWithoutLogin();
            })
          }
        })

      }
      console.log("Get Toekns: ",value);
    });
  }

   render(){
     
      if(this.state.loading){
        return(
          <View style={styles.loading}>
            <ActivityIndicator/>
          </View>
        )
      }else{
        return(
          <ScrollView style={styles.container}>
            <View>
              <AuthLogo/>
              <AuthForm
                goWithoutLogin={this.goWithoutLogin}
              />
            </View>
          </ScrollView>
        )
      }
       
   }
 }
 
 const styles = StyleSheet.create({
    loading:{
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
   },
   container:{
     flex:1,
     backgroundColor:'#7487C5',
     padding:130,
     paddingLeft:50,
     paddingRight:50,

   }
   
 });
 
 function mapStateToProps(state){
   return {
     User: state.User
   }
 }

 function mapDispatchToProps(dispatch){
   return bindActionCreators({autoSignIn},dispatch);

 }


 export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
 