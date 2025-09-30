import { Inputform } from "./components/Intrestform"
import { Namefrom } from "./components/Namefrom"
import { Settingform } from "./components/Settingform"
import { Tab } from "./components/Tab"

function App() {

  return (
    <>
    <Tab />
    <div className="form">
      <Namefrom />
      <Inputform />
      <Settingform />
    </div>
    </>
  )
}

export default App
