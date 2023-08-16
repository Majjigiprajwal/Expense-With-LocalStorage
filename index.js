var expenseButton = document.getElementById('AddExpense');
const expenseData ={ 
}

function handleChange(e){
   var ele = document.getElementById(e.target.id);
   expenseData[ele.id]=ele.value;
}

function deleteExpense(e){
    var parentDiv = e.target.parentElement;
    var listItem = parentDiv.querySelector('.list-group-item');
  
    var [amount, description, category] = listItem.textContent.split('-');
    localStorage.removeItem(description);
    
    parentDiv.remove();
 }
 
 function updateExpense(e){
    var parentDiv = e.target.parentElement;
    var listItem = parentDiv.querySelector('.list-group-item');
  
    var [amount, description, category] = listItem.textContent.split('-');
    deleteExpense(e);
    document.getElementById('Amount').value=amount;
    document.getElementById('Description').value=description;
    document.getElementById('Category').value=category;


 }


const  addExpense = ()=>{
   localStorage.setItem(expenseData.Description,JSON.stringify(expenseData));
   var parent = document.getElementById('expenseList');
   var div = document.createElement('div');
   div.id="lists"

   var list = document.createElement('li');
   list.textContent=`${expenseData.Amount}-${expenseData.Description}-${expenseData.Category}`
   list.classList="list-group-item w-50 m-2 p-2";
   var deleteBtn =  document.createElement('button');
   deleteBtn.classList="btn btn-danger mb-3 m-3";
   deleteBtn.id="lists";
   deleteBtn.textContent="Delete Expense";
   var updateBtn =  document.createElement('button');
   updateBtn.classList="btn btn-info mb-3 m-3";
   updateBtn.id="lists";
   updateBtn.textContent="Update Expense";
   deleteBtn.addEventListener('click',(e)=>{
    deleteExpense(e)});
   updateBtn.addEventListener('click',(e)=>{
    updateExpense(e)});
   div.appendChild(list);
   div.appendChild(deleteBtn);
   div.appendChild(updateBtn);
   parent.appendChild(div);
   document.getElementById('Amount').value="";
   document.getElementById('Description').value="";
   document.getElementById('Category').value="choose";
}



expenseButton.addEventListener('click',addExpense);
