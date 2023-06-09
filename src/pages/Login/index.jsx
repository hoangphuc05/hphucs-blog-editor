

function Login() {
  return (<div className="w-full flex flex-row justify-center">
    <div className="max-w-lg w-3/6">
      Login
      <label for="UserEmail" class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600">
        <input
          type="email"
          id="UserEmail"
          placeholder="Email"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span 
          class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Email
        </span>
      </label>

      <label
        for="UserEmail"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="email"
          id="UserEmail"
          placeholder="Email"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
          class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          Email
        </span>
      </label>
    </div>
  </div>)
}

export default Login;