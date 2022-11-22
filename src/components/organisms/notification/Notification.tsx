import React, { useCallback, useState, useEffect } from "react";
import * as S from "./styles";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg"

const DURATION = 4000

const Hero: React.FC = () => {

  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false)
    }, DURATION)
  }, [])

  const closeNotification = useCallback(() => {
    setShowNotification(false)
  }, [])

  return (

    <S.Notification showNotification={showNotification} >
      <div>
        <p>Esse site ainda está em desenvolvimento!</p>
        <button onClick={closeNotification}><CloseIcon /></button>
      </div >

    </S.Notification >




  )
}

export default Hero