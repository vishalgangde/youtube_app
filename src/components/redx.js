console.clear();

//people dropping a form(Action Creator)

const createPolicy = (name,amount) => {
  return { //action: a form in our analog(plan JavaScript Object)
        type : 'CREATE_POLICY',
        payload: {
             name: name,
            amount: amount  
             
        }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload : {
      name: name
    }
  };
};

const createCliam = (name, amountOfmoneyTocollect) => {
  return{
    type : 'CREATE_CLIAM',
    payload:{
      name: name,
      amountOfmoneyTocollect:  amountOfmoneyTocollect
    }
  };
};

//Reducers(Department Claim)
const claimHistory = (oldListOfCliam=[], action) =>{
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action(form!!)
    return [...oldListOfCliam, action.payload];
  }
  //we dont care about this action
  return oldListOfCliam;
  };

//Reducers(Department Accounting)
const accounting = (bagOfAmount = 100, action) => {
  if(action.type === 'CREATE_CLIAM'){
    return bagOfAmount - action.payload.amountOfmoneyTocollect;
  } 
  else if(action.type === 'CREATE_POLICY'){
    return bagOfAmount + action.payload.amount;
  }
  return bagOfAmount;
};

//Reducers(Department Policies)
const policies = (listOfPolicies = [],action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }
  else if(action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

const { createStore, combineDepartment } = Redux;

const ourDepartment = combineDepartment({
  accounting : accounting,
  claimHistory: claimHistory,
  policies : policies
});

const store = createStore(ourDepartment);

store.dispatch(createPolicy('parivesh',30));

store.dispatch(createPolicy('vijay',50));

store.dispatch(createPolicy('vishal',60));

console.log(store.getState());