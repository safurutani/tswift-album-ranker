import React, {createContext, useContext, useState, useEffect} from "react";
import { auth, db } from './firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
const RatingsContext = createContext();

export const useRatingsContext = () => useContext(RatingsContext);

export const RatingsProvider = ({children}) => {
  // Ratings for every song on every album
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const ratingsData = getUserRatings(currentUser.uid);
        if (ratingsData) {
          setRatings(prevRatings => ({...prevRatings, ...ratingsData}));
        }
      }
    });
    return () => unsubscribe();
    }, []);

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
  const saveRatingsToFirestore = async (ratings) => {
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    const userDoc = doc(db, "ratings", user.uid);

    try {
      await setDoc(userDoc, { ratings });
      console.log("Ratings saved successfully!");
    } catch (error) {
      console.error("Error saving ratings:", error);
    }
  };  
  const getUserRatings = async (userId) => {
    if (!userId) {
      console.error("User is not authenticated");
      return null;
    }
  
    const userDoc = doc(db, "ratings", userId);
  
    try {
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        console.log("User ratings:", docSnap.data());
        return docSnap.data().ratings;
      } else {
        console.log("No ratings found for this user.");
        return {};
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
      return {};
    }
  }
  return(
    <RatingsContext.Provider 
    value={{
      user, setUser,
      ratings, setRatings, 
      resetRatings, 
      updateRatings, 
      saveRatingsToFirestore,
      getUserRatings
    }}>
        {children}
    </RatingsContext.Provider>
  );
};