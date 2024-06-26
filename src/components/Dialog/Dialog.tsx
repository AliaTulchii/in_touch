import { NavLink } from 'react-router-dom'



interface DialogProps {
    name: string;
    src: string;
    numb: number;
}
const Dialog: React.FC<DialogProps> = ({name, src,numb}) => {
  return (
    <div>
       <NavLink to={`/dialogs/${numb}`}>
          <div className="dialogs__item">            
            <img className='dialogs__img'  src={src} alt="human" />
                  <p className='dialogs__name'>{name}</p>
          </div>          
        </NavLink>
    </div>
  )
}

export default Dialog
