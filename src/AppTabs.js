import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AppQuery from "./AppQuery";
import AppQuerySS from "./AppQuerySS";
import AppD from "./AppD";
import AppSeman from './AppSeman';
import AppContext from "./AppContext";
import TableEx from "./AppV";
import SS from "./SS";
import Layout1 from "./Layout1";
import SimpleNestedExample from "./AppSplit";

class App extends React.Component{
  render() {
    return (
      <Tabs  style={{width:"100vw",height:"100vh",overflow:"auto"}}>
        <TabList>
          <Tab>splitpane</Tab> 
          <Tab>ss1</Tab> 
          <Tab>Layout1</Tab> 
          <Tab>Semantic-ui</Tab>
          <Tab>AceEditor & GridExample</Tab>
          <Tab>storm diagrams</Tab>
          <Tab>react context</Tab>
          <Tab>Virtual Table Demo</Tab>
          <Tab>SS</Tab>
        </TabList>
        <TabPanel>
          <div style={{backgroundColor:"#eee",width:"100%",height:"100%"}}>
          <SimpleNestedExample />
          </div>
          
        </TabPanel>
        <TabPanel>
          <AppQuerySS />
          
        </TabPanel>
        <TabPanel>
          <AppQuery />
          
        </TabPanel>
        <TabPanel>
          <AppSeman />
        </TabPanel>
        <TabPanel>
          <Layout1 />
        </TabPanel>
        <TabPanel>
          <AppD />
        </TabPanel>
        <TabPanel>
          <AppContext />
        </TabPanel>
        <TabPanel>
          <TableEx />
        </TabPanel>
        <TabPanel>
          <SS />
        </TabPanel>
      </Tabs>
    );
  }
}
export default App;