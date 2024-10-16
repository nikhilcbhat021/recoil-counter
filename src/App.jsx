
import { countAtom } from './store/atoms/counter';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log("App re-rendered. (App->Count->(CountRenderer,Buttons))");
  });

  return  (
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
  )
}

function Count() {

  useEffect(() => {
    console.log("Count re-rendered. (App->Count->(CountRenderer,Buttons))");
  });

  return (<>
    <CountRenderer />
    <Buttons />
  </>)
}

function CountRenderer() {

  const count = useRecoilValue(countAtom);
  // Feel free to uncomment below line and comment the above line, and check the logs coming...
  // to understand why it's better to use the 
  // const [count, setCount] = useRecoilState(countAtom);
  
  useEffect(() => {
    console.log("CountRenderer re-rendered. (App->Count->(CountRenderer,Buttons))");
  });
  
  return (
    <div>
      <p> { count } </p>
    </div>
  )
}

function Buttons() {

  const setCount = useSetRecoilState(countAtom);
  // Feel free to uncomment below line and comment the above line, and check the logs coming...
  // to understand why it's better to use the 
  // const [count, setCount] = useRecoilState(countAtom);
  
  useEffect(() => {
    console.log("Buttons re-rendered. (App->Count->(CountRenderer,Buttons))");
  });

  return (
    <div>
      <hr />
      <button onClick={() => {setCount((Count) => (Count+1))}}>Increment</button>
      <button onClick={() => {setCount((Count) => (Count-1))}} style={{marginLeft: '10px'}}>Decrement</button>
    </div>
  )
}

export default App
