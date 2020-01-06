import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

const Title = () => {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <TypoGraphy variant="title"
          style={{ fontSize: 24, fontWeight: 600, marginRight: 20 }}
          >
            Search and Send!
          </TypoGraphy>
          <TypoGraphy variant="caption"
          style={{ marginTop: 30, marginLeft: 'auto' }}
          >
            A Pokemon image sharing app
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Title;




  // {/* <Card style={{ textAlign: 'center', color: '#FF8C00' }}>
  //   <CardHeader
  //     title="Search and Send"
  //   >
  //   </CardHeader>
  //   <CardSubHeader>
  //     A Pokemon image sharing app
  //   </CardSubHeader>
  // </Card> */}


//   <div>
//   <AppBar color="primary" position="static">
//     <Toolbar>
//       <TypoGraphy variant="title"
//         color="inherit"
//       >
//         Search and Send
//       </TypoGraphy>
//     </Toolbar>
//   </AppBar>
// </div>