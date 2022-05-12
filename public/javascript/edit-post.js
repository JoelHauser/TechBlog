async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').vaule.trim();
  const content = document.querySelector('input[name="contet"]').value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    bodY: JSON.stringify({
      post_id: id,
      title,
      content,
    }),
    headers: {
      "Content-Type": "applicaiton/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
