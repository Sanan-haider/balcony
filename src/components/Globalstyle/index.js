import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }

  @media only screen and (max-width:1350px) and (min-width:1201px){
    .container {
        max-width: 1100px !important;
        margin: 0 auto;
    }
        .chat-groups {
        padding-right: 60px !important;
    
    }
      .chat-module {
        padding-left: 60px !important;
    }
    
    }
    @media only screen and (max-width:852px) and (min-width:768px){
      .outsideheading {
        text-align: center;
    }
    .breadcrumbs {
      text-align: center !important;
  }
    }
    @media only screen and (max-width:1200px) and (min-width:768px){
    
      
     .chat-module {
        display: none;
    }
      .dnEuxf .chat-heading {
        text-align: center !important;
    }
      
      
      
    .container {
        max-width: 900px !important;
        margin: 0 auto;
    }
      .account-dashboard {
        justify-content: center !important;
    }
      .sidebar-wrapper {
        flex-direction: row !important;
        gap: 45px !important;
    
    }
    
      .dashboard-sidebar {
        width: auto !important;
        height: auto !important;
        padding: 15px 40px !important;
    }
      .dashboard-chat {
        flex: 0 0 100% !important;
    }
      .dashboard-chat-wrapper {
        justify-content: space-around !important;
      }
        .chat-groups {
        padding-right: 0px !important;
           border-right: none !important;
    
    }
      .chat-module {
        padding-left: 0px !important;
    }
      
      
    }
    @media only screen and (max-width:767px) and (min-width:480px){
      .breadcrumbs {
        text-align: center !important;
    }
      .outsideheading {
        text-align: center;
    }
       .chat-module {
        display: none;
    }
    .container {
        max-width: 900px !important;
        margin: 0 auto;
    }
      .account-dashboard {
        justify-content: center !important;
    }
      .sidebar-wrapper {
        flex-direction: row !important;
        gap: 45px !important;
    
    }
    
      .dashboard-sidebar {
        width: auto !important;
        height: auto !important;
        padding: 15px 40px !important;
    }
      .chat-groups {
        padding-right: 0px !important;
        border-right: none !important;
    }
      .chat-module {
        padding-left: 0px !important;
    }
      .dashboard-chat-wrapper {
        justify-content: center !important;
        gap: 60px !important;
      }
      .chat-heading {
        text-align: center !important;
      }
      
    }
    @media only screen and (max-width:479px) and (min-width:320px){
      .breadcrumbs {
        text-align: center !important;
    }
      .box {
        width: 298px !important;
        padding: 261px 238px 10px 10px !important;
      
    }
      .outsideheading {
        text-align: center;
    }
       .chat-module {
        display: none;
    }
    .container {
        max-width: 900px !important;
        margin: 0 auto;
    }
      .account-dashboard {
        justify-content: center !important;
    }
      .sidebar-wrapper {
        flex-direction: row !important;
        gap: 45px !important;
    
    }
    
      .dashboard-sidebar {
        width: auto !important;
        height: auto !important;
        padding: 15px 40px !important;
    }
      .chat-groups {
        padding-right: 0px !important;
        border-right: none !important;
    }
      .chat-module {
        padding-left: 0px !important;
    }
      .dashboard-chat-wrapper {
        justify-content: center !important;
        gap: 60px !important;
      }
        .chat-heading {
        text-align: center !important;
      }
    .header-bar .header-txt {
        font-size: 32px!important;
    }
       .message {
        width: 264px !important;
      }
       .header-bar .account-btn {
        width: 75px !important;
        font-size: 15px !important;
    }
      .search-btn {
        width: 32px !important;
        height: 32px !important;
        padding: 8px 8px 0px !important; 
    }
`;

export default GlobalStyle;
