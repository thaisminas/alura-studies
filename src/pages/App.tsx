import React from 'react';
import Botao from '../components/botao';
import Cronometro from '../components/cronometro';
import Formulario from '../components/fomulario/index';
import Lista from '../components/lista';
import style from './App.module.scss'


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;