import '../../styles/components/_dialogs.scss'
import '../../styles/components/_messages.scss'

import barbara from '../../img/dialogs/barbara.jpg'
import daniel from '../../img/dialogs/daniel.jpg'
import seba from '../../img/dialogs/seba.png'
import eva from '../../img/dialogs/eva.jpg'
import { NavLink } from 'react-router-dom'
import Dialog from '../../components/Dialog/Dialog'
import Message from '../../components/Message/Message'




const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Daniel', src: daniel },
    {id: 2, name: 'Eva', src: eva},
    {id: 3, name: 'Sebastian', src: seba},
    {id: 4, name: 'Barbara', src: barbara},
    
  ]

  let messagesData = [
    { id: '1', message: 'Hi' },
    {id: '2', message: 'How is your day going?'},
    {id: '3', message: 'awesome'},    
  ]

  return (
      <div className="dialogs">
      <div className="dialogs__items">
        {dialogsData.map((dialog) => {
          return <Dialog key={dialog.id} name={dialog.name} src={dialog.src} numb={dialog.id} />
        })}
        </div>

      <div className="messages">
        {
          messagesData.map((message) => {
            return <Message key={message.id} text={message.message} id={message.id} />
          })
        }      
    </div>
      </div>
      

    
    
    
  )
}

export default Dialogs
