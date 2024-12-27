import React, {createContext, useContext, useState} from "react";

const RatingsContext = createContext();

export const useRatingsContext = () => useContext(RatingsContext);

export const RatingsProvider = ({children}) => {
  // Ratings for every song on every album
  const [ratings, setRatings] = useState({
    debut: {
        input1: 5,
        input2: 5,
        input3: 5,
        input4: 5,
        input5: 5,
        input6: 5,
        input7: 5,
        input8: 5,
        input9: 5,
        input10: 5,
        input11: 5,
        input12: 5,
        input13: 5,
        input14: 5
    },
    fearless: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5,
      input19: 5,
      input20: 5,
      input21: 5,
      input22: 5,
      input23: 5,
      input24: 5,
      input25: 5
    },
    speaknow: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5,
      input19: 5,
      input20: 5,
      input21: 5,
      input22: 5
    },
    red: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5,
      input19: 5,
      input20: 5,
      input21: 5,
      input22: 5,
      input23: 5,
      input24: 5,
      input25: 5,
      input26: 5,
      input27: 5,
      input28: 5,
      input29: 5
    },
    x1989: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5
    },
    reputation: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5
    },
    lover: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5
    },
    folklore: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
    },
    evermore: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5
    },
    midnights: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5,
      input19: 5,
      input20: 5,
      input21: 5
    },
    ttpd: {
      input1: 5,
      input2: 5,
      input3: 5,
      input4: 5,
      input5: 5,
      input6: 5,
      input7: 5,
      input8: 5,
      input9: 5,
      input10: 5,
      input11: 5,
      input12: 5,
      input13: 5,
      input14: 5,
      input15: 5,
      input16: 5,
      input17: 5,
      input18: 5,
      input19: 5,
      input20: 5,
      input21: 5,
      input22: 5,
      input23: 5,
      input24: 5,
      input25: 5,
      input26: 5,
      input27: 5,
      input28: 5,
      input29: 5,
      input30: 5,
      input31: 5,
    }
  });

  // Set the ratings for current album to 5
  const resetRatings = (albumName) => {
      setRatings((prevRatings) => ({
          ...prevRatings,
          [albumName]: Object.keys(prevRatings[albumName]).reduce((acc, key) => {
              acc[key] = 5;
              return acc;
          }, {}),
      }));
  };

  // Update the input value in the ratings hook
  const updateRatings = (albumName, inputKey, value) => {
      let newValue = parseInt(value);
      // Prevent empty value
      if(isNaN(newValue)) {
          return;
      }
      // Restrict the value between 0 and 10
      newValue = Math.min(10, Math.max(0, newValue));
      setRatings((prevRatings) => ({
          ...prevRatings,
          [albumName]: {
              ...prevRatings[albumName],
              [inputKey]: newValue,
          },
      }));
  };
    
  return(
    <RatingsContext.Provider 
    value={{
      ratings, setRatings, 
      resetRatings, 
      updateRatings, 
    }}>
        {children}
    </RatingsContext.Provider>
  );
};