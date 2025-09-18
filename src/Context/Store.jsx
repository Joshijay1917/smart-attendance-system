import { createContext, useEffect, useState } from "react";
// store.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";

// ✅ Call this once anywhere (store is a good place)
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  Colors
);

export const Store = createContext(null)

const StoreProvider = (props) => {
    const [session, setsession] = useState(null)

    useEffect(() => {
      if(session) {
        setTimeout(() => {
            setsession(null);
        }, parseInt(session.duration) * 60 * 1000);
      }
    }, [session])
    

    const contextValue = {
        session,
        setsession
    }

    return (
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider
