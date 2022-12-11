// import React from 'react';
// import { useLocation,
//     useNavigate,
//     useParams } from 'react-router-dom';
import ReactGA from 'react-ga4'
const GA_TRACKING_ID = "UA-48467374-1";

export const initialiseAnalytics = () => {
    ReactGA.initialize(GA_TRACKING_ID, {titleCase: false})
}

//   const withRouter = (Component) => {
//     function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           router={{ location, navigate, params }}
//         />
//       );
//     }
  
//     return ComponentWithRouterProp;
//   }

// class GoogleAnalytics extends React.Component {
//     componentWillUpdate ({ location, history }) {
//         const gtag = window.gtag;
//         console.log('LOCATION',location)
//         console.log('HISTORY',history)
//         if (location.pathname === this.props.location.pathname) {
//             // don't log identical link clicks (nav links likely)
//             return;
//         }
//         if (history.action === 'PUSH' &&
//             typeof(gtag) === 'function') {
//             gtag('config', GA_TRACKING_ID, {
//                 'page_title': document.title,
//                 'page_location': window.location.href,
//                 'page_path': location.pathname
//             });
//         }
//     }

//     render () {
//         return null;
//     }
// }

// export default withRouter(GoogleAnalytics);