import { useEffect, useState } from 'react'

const Dice = () => {
  const initialValueLeft = [
    2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8,
    8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12,
  ]

  const [valuesLeft, setValuesLeft] = useState(initialValueLeft)
  const [rolledValue, setRolledValue] = useState('')
  const [timesRolled, setTimesRolled] = useState(0)
  const [lastRolled, setLastRolled] = useState('')

  const resetSession = () => {
    setValuesLeft(initialValueLeft)
    setRolledValue('')
    setTimesRolled(0)
    setLastRolled('')
  }

  const whenRoll = () => {
    const random = Math.floor(Math.random() * valuesLeft.length)
    setRolledValue(valuesLeft[random])
    setTimesRolled(timesRolled + 1)

    setLastRolled(rolledValue)

    const values = valuesLeft
    const remove = values.splice(random, 1)
    setValuesLeft(values)

    if (valuesLeft.length === 0) {
      setValuesLeft(initialValueLeft)
    }
  }

  /* useEffect(() => {

  }, []) */

  return (
    <div className='py-8 h-full flex flex-col justify-between items-center mx-4'>
      <h1 className='text-4xl'>Settlers of Catan - Fair Dice</h1>
      <div>
        <button
          className='border-white border-2 px-8 py-4 rounded-lg text-2xl'
          onClick={whenRoll}
        >
          Roll!
        </button>
        <h1 className='text-xs text-gray-300'>{`Last number rolled: ${lastRolled}`}</h1>
      </div>
      <div>
        <h1 className='text-lg text-gray-300'>You rolled:</h1>
        <h1 className='text-8xl'>{rolledValue}</h1>
      </div>
      <div>
        <h1 className='text-xs text-gray-300'>{`You have rolled ${timesRolled} times`}</h1>
        {/* <h1>{`Values left this session ${valuesLeft}`}</h1> */}
        <button
          className='border-white border mt-2 px-2 py-1 rounded-lg text-xs'
          onClick={resetSession}
        >
          Reset/start over
        </button>
      </div>
    </div>
  )
}

export default Dice
