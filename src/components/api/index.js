
import Chance from "chance";

const chance = Chance();
export const fakeUserData = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};

export const index = () => {
  return Math.floor(Math.random() * 10)+1;
};


export const attendence = () => {
  return "hi shree"
};



