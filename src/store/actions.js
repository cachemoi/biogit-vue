/*
Actions are just functions that can be called by our components to dispatch mutations.
They receive the store as the first argument followed by any number of additional arguments.
You may be wondering, why bother calling an action to dispatch a mutation? Why don't we just
call the mutation from within the component?
The main reason for this is that mutations must be synchronous, whereas actions can be asynchronous.
What this basically means is:
if you want to make any AJAX requests, for instance, you would have to make them in the actions and not the mutations.
 */

export const login = ({ dispatch }) => {
  dispatch('LOGIN')
}

export const signUp = ({ dispatch }) => {
  dispatch('SIGN_UP')
}
