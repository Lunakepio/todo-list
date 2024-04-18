import { useEffect } from "react"
export const Test = () => {

  useEffect(() => {
    console.log('test')
  
  }, [])
  return <div>test</div>
}