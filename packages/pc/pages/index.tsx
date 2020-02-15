import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link';
import { Dispatch} from 'redux'

import { startClock, serverRenderClock } from '../store/features/clockSlice'
import Examples from '../components/examples'

interface Props {
  dispatch: Dispatch
}

class Home extends React.Component<Props> {
  timer: NodeJS.Timeout

  static getInitialProps(props) {
    const { reduxStore, req } = props
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (<>
    <h1>Hello world!</h1>
    <Link href="/about">
      <a>about</a>
      </Link>
     <Examples />
     </>
    )
  }
}


export default connect()(Home);
