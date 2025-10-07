let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

todoContainer.tagName = "p";

const API = "https://68e22f108943bf6bb3c5dcd4.mockapi.io/api/v1/todos";

addButton.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  if (data) {
    todoContainer.innerHTML = "";
    data.forEach((element) => {
      todoDiv = document.createElement("div");
      todoDiv.className = "todo";
      todoDiv.innerHTML = `<p class="paraText">${element.text}</p>
                            <input id="editInput" value="${element.text}">
          <div>
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
            <button class="deleteBtn">Delete</button>
          </div>
    `;

      let deleteBtn = todoDiv.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", () => {
        deleteData(element.id);
      });

      let editBtn = todoDiv.querySelector(".editBtn");
      let saveBtn = todoDiv.querySelector(".saveBtn");
      let editInput = todoDiv.querySelector("#editInput");
      let paraText = todoDiv.querySelector(".paraText");
      editBtn.addEventListener("click", () => {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
        paraText.style.display = "none";
        editInput.style.display = "inline";
      });

      saveBtn.addEventListener("click", async () => {
        let response = await updateData(
          element.id,
          editInput.value,
          paraText.innerText
        );
        if (response.status === 200) {
          fetchData();
        }
        saveBtn.style.display = "none";
        editBtn.style.display = "inline-block";
        editInput.style.display = "none";
        paraText.style.display = "block";
      });

      //   let editBtn = todoDiv.querySelector(".editBtn");
      //   editBtn.addEventListener("click", (event) => {
      //     let parent = event.target.parentNode;
      //     let editButton = parent.children[0];
      //     let saveButton = parent.children[1];
      //     editButton.style.display = "none";
      //     saveButton.style.display = "inline-block";
      //     let superParent = parent.parentNode;
      //     let paragraphElement = superParent.children[0];
      //     let updatedInput = document.createElement("input");
      //     updatedInput.className = "updatedInput";
      //     let defaultValue = paragraphElement.innerText;
      //     updatedInput.value = defaultValue;
      //     superParent.removeChild(paragraphElement);
      //     superParent.prepend(updatedInput);

      //     saveButton.addEventListener("click", () => {
      //       let updatedData = updatedInput.value;
      //       updateData(element.id, updatedData, defaultValue);
      //       editButton.style.display = "inline-block";
      //       saveButton.style.display = "none";
      //     });
      //   });
      todoContainer.append(todoDiv);
    });
  }
}

async function postData() {
  let data = taskInput.value;

  if (data === "") {
    alert("Enter valid data");
    return;
  }

  let objData = {
    text: data.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if (response.status === 201) {
    taskInput.value = "";
    fetchData();
  }
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    fetchData();
  }
}

async function updateData(id, data, defaultValue) {
  if (data === "") {
    alert("Enter Valid Task");
    data = defaultValue;
  }

  let newData = {
    text: data.trim(),
  };

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  return response;
}

// async function updateData(id, data, defaultValue) {
//   if (data === "") {
//     alert("Enter Valid task");
//     data = defaultValue;
//   }

//   let newData = {
//     text: data.trim(),
//   };

//   //   console.log(updatedData);

//   let response = await fetch(`${API}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newData),
//   });
//   if (response.status === 200) {
//     fetchData();
//   }
// }

fetchData();
