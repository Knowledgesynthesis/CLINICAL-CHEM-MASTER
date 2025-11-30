import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { Foundations } from './pages/modules/Foundations'
import { Instrumentation } from './pages/modules/Instrumentation'
import { Quality } from './pages/modules/Quality'
import { ChemPanels } from './pages/modules/ChemPanels'
import { Endocrine } from './pages/modules/Endocrine'
import { SpecialChem } from './pages/modules/SpecialChem'
import { Toxicology } from './pages/modules/Toxicology'
import { Errors } from './pages/modules/Errors'
import { Automation } from './pages/modules/Automation'
import { Consults } from './pages/modules/Consults'
import { Cases } from './pages/Cases'
import { Assessment } from './pages/Assessment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="foundations" element={<Foundations />} />
          <Route path="instrumentation" element={<Instrumentation />} />
          <Route path="quality" element={<Quality />} />
          <Route path="chem-panels" element={<ChemPanels />} />
          <Route path="endocrine" element={<Endocrine />} />
          <Route path="special-chem" element={<SpecialChem />} />
          <Route path="toxicology" element={<Toxicology />} />
          <Route path="errors" element={<Errors />} />
          <Route path="automation" element={<Automation />} />
          <Route path="consults" element={<Consults />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
