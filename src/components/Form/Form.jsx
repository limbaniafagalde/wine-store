import React from "react"; 
import firebase from "firebase/app";
import {database} from "../../firebase/firebase";

const Form  = ({ cart, totalPrice, clearCart }) => {


    const handleSubmit = (event) =>{
        
        event.preventDefault();

        ///Get user data
        const userData = {
          name: event.target.name.value,
          lastname: event.target.lastname.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
        };
    
        //new order object
        const newOrder = {
          buyer: userData,
          date: new Date().toString(),
          items: cart,
          total: totalPrice()
        };
    
        const orders = database.collection("orders");
        let orderId ;
    
        orders
          .add(newOrder)
          .then((response) => {

            orderId = response.id;
          })
          .catch((error) => {
            alert("ERROR: " + error);
          });
    
        const itemsToCheck = database.collection("products").where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          cart.map((item) => item.id)
        );
    
        itemsToCheck.get().then((query) => {
          
          const batch = database.batch();
          const outOfStockItems = []; 

          query.docs.forEach((doc, index) => {
            
            if (doc.data().stock >= newOrder.items[index].quantity) {
            
              batch.update(doc.ref, {
            
                stock: doc.data().stock - newOrder.items[index].quantity,
            
            });
            } else {
            
              outOfStockItems.push({ ...doc.data(), id: doc.id });
            }
          });
          
          if (outOfStockItems.length === 0) {
            
            batch.commit().then(() => {
              
              alert("Thank you for your order! \n ID: " + orderId);
              clearCart();
            });

          } else {
            alert("ERROR: There are some items out of stock.");
          }
        });
    
    }

    return ( 
      <>
        <form onSubmit={handleSubmit} className = "checkForm">
            <h2>Contact Info</h2>
            <input type="text" placeholder="Name" id="name" />
            <input type="text" placeholder="Last Name" id="lastname" />
            <input type="tel" placeholder="Phone" id="phone" />
            <input type="email" placeholder="Email" id="email" />
            <button type="submit" className="formButton">BUY</button>
        </form>
      </>
    );
}


export default Form;