// route to get logged in user's info (needs the token)
// 3baff913a7ad4e91a43d9a09f0bf8551



export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save recipe data for a logged in user
export const saveRecipe = (recipeData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeData),
  });
};

// remove saved recipe data for a logged in user
export const deleteRecipe = (recipeId, token) => {
  return fetch(`/api/users/recipes/${recipeId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// TODO: what API are we using for fetching Recipes? or is it all user input?

// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };

export const searchRecipes = (query) => {
  return fetch(``);
}
