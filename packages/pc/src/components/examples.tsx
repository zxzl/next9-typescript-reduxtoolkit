import { useSelector } from 'react-redux'
import Clock from 'src/components/clock'
import Counter from 'src/components/counter'

export default () => {
  const lastUpdate = useSelector(state => state.clock.lastUpdate)
  const light = useSelector(state => state.clock.light)

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}
