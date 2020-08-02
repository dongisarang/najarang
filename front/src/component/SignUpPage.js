import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { observer, inject } from "mobx-react";

@inject("yourstore")
@observer
class SignUpPage extends Component{
    constructor(props) {
            super(props);
            this.state = {
                    options: [{name: '취미', id: 1},{name: '소확행', id: 2},{name: '월급루팡', id: 3}]
                };
        }
    onSelect=(selectedList, selectedItem)=>{
        console.log('누름',selectedList);
    };
    onRemove=(selectedList, removedItem)=>{
      
    };
    render(){
        return(
            <Layout>
                <AliasLayout>
                <div>별명</div>
                <input placeholder="내용을 입력해주세요"
                    type = "text"
                    className="form-control">     
                </input>
            </AliasLayout>
            <InterestTopicLayout>
                <div>관심 토픽 설정</div>
                
            </InterestTopicLayout>
            <MultiSelectLayout>
                <Multiselect
                    options={this.state.options} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    
            />
            </MultiSelectLayout>
            <NextButtonLayout>
                <Link to='/login'>
                <button>다음</button>
                </Link>
                
            </NextButtonLayout>
            </Layout>
            
    
            
        )
    }; 
}
const Layout = styled.div`
    display:flex;
    flex-direction:column;
`;
const AliasLayout = styled.div`
    display:flex;
    flex-direction:column;
    div{
        display:flex;
        margin-left:100px;
        margin-top:50px;
    }
    input{
        justify-content: center;
        margin-left:150px;
        width:30%;
        border-radius:10px;
        height:30px;
        border: 1px solid gray;
    }

`;
const InterestTopicLayout = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:50px;
    div{
        display:flex;
        margin-left:100px;
       
    }

`;
const MultiSelectLayout = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:50px;
    margin-left:150px;
    width:390px;
    .multiSelectContainer {
        position: relative;
        text-align: left;
        width: 50%;
      }
    .searchWrapper {
        border: 1px solid gray;
        border-radius: 5px;
        padding: 5px;
        min-height: 22px;
        position: relative;
    }
    .multiSelectContainer ul {
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        max-height: 250px;
        overflow-y: auto;
      }
      .chip {
        padding: 4px 10px;
        background: #0096fb;
        background-color:#8885a4;
        margin-right: 5px;
        margin-bottom: 5px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        font-size: 13px;
        color: #fff;
        white-space: nowrap;
      }
      
    .searchBox { // To change search box element look
        border: none;
        border-radius: 20px;
        font-size: 10px;
        min-height: 20px;
        max-width: 50px;
      }
`;
const NextButtonLayout = styled.div`
    display:flex;
    flex-direction:column;
    button{
        width:70px;
        height:40px;
        margin-top:50px;
        margin-left:100px;
        background-color:#8885a4;
        color: #fff;
        border-radius: 20px;
    }
`;
export default SignUpPage;