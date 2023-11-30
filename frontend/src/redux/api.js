const backend_api = "http://localhost:8080";

export function login_user_api(user_body) {
  return fetch(`${backend_api}/create_user`, {
    method: "POST",
    body: JSON.stringify(user_body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function change_user_detail_api(user_id, user_body) {
  return fetch(`${backend_api}/change_user/${user_id}`, {
    method: "PATCH",
    body: JSON.stringify(user_body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function user_logged_in_api() {
  return fetch(
    `${backend_api}/${localStorage.getItem("padcast_platform_cur_user")}`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function create_new_project_api(project_body) {
  return fetch(`${backend_api}/project/create_project`, {
    method: "POST",
    body: JSON.stringify(project_body),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("padcast_platform_cur_user"),
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function get_all_projects_api() {
  return fetch(`${backend_api}/project/getall`, {
    headers: {
      Authorization: localStorage.getItem("padcast_platform_cur_user"),
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function create_new_file_api(file_body) {
  return fetch(`${backend_api}/file/create_file`, {
    method: "POST",
    body: JSON.stringify(file_body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function get_all_file_api(project_id) {
  return fetch(`${backend_api}/file/get_files/${project_id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function change_file_description_api(file_id, project_id, file_body) {
  return fetch(
    `${backend_api}/file/change_description/${file_id}/${project_id}`,
    {
      method: "PATCH",
      body: JSON.stringify(file_body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function delete_file_api(file_id, project_id) {
  return fetch(`${backend_api}/file/delete_file/${file_id}/${project_id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function get_chatbot_info_api() {
  return fetch(`${backend_api}/chatbot/getchat`, {
    headers: {
      Authorization: localStorage.getItem("padcast_platform_cur_user"),
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function create_chatbot_info_api(chatbot_body) {
  return fetch(`${backend_api}/chatbot/create_chatbot`, {
    method: "POST",
    body: JSON.stringify(chatbot_body),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("padcast_platform_cur_user"),
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export function update_chatbot_info_api(chatbot_id,chatbot_body){
  return fetch(`${backend_api}/chatbot/update_chatbot/${chatbot_id}`, {
    method: "PATCH",
    body: JSON.stringify(chatbot_body),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("padcast_platform_cur_user"),
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err.message);
    });
}
