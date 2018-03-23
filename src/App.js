import React, { Component } from 'react';
import {
  DatePicker,
  Input,
  Select,
} from 'antd';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
const Option = Select.Option;
const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValues: 'baidu',        //选择框选中值
    };
  }

  selectBefore (){
    return(
      <Select defaultValue={this.state.selectValues} color="white" style={{ width: 100}} className="searchBefore" onSelect={(value) => {this.setState({selectValues: value})}}>
        <Option value="baidu">百度一下</Option>
        <Option value="google">Google</Option>
      </Select>
    )
  };

  render() {
    return (
      <div className="App">
        <div className="Top-search-area">
          <div className="search-input">
            <Search size="large" className="input-area" addonBefore={this.selectBefore()} onSearch={(info) => this.goToSearch(info)} placeholder="Search..." />
          </div>
        </div>
        <div className="Main-area"></div>
        <div className="Copy-area"></div>
      </div>
    );
  }

  goToSearch(info) {
    let url = '';
    switch(this.state.selectValues){
      case 'baidu':
                  url = 'https://www.baidu.com/s?wd=';
                  break;
      case 'google':
                  url = 'https://www.google.com/search?q=';
                  break;
      default: break;
    }
    window.open(url+info);
  }
}

export default App;
