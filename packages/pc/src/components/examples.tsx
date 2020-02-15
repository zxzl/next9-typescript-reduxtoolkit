import { useSelector } from 'react-redux'

import { RootState } from 'src/store'
import Clock from 'src/components/clock'
import Counter from 'src/components/counter'

export default () => {
  const lastUpdate = useSelector((state: RootState) => state.clock.lastUpdate)
  const light = useSelector((state: RootState) => state.clock.light)

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}
