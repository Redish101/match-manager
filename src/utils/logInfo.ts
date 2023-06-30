import packageJSON from '@/../package.json'

const logInfo = () =>
  console.log(
    `%c ${packageJSON.name} %c ${packageJSON.version}`,
    'background: #006BB8; padding: 5px; border-radius: 3px 0 0 3px; color: #fff',
    'background: #006BB818; padding: 5px; border-radius: 0 3px 3px 0; color: #006BB8',
    
  )

export default logInfo
