function GitHubInput () {
  return (
    <div className="text-input">
      <label htmlFor="github-user">Github username</label>
      <input
        type="text"
        id="github-user"
        name="github-user"
        required
        pattern="^@[^\s]+"
        title="Username must start with @. Example: @username"
        aria-describedby="github-username-info"
        aria-label="Github username (starting with @)"
        aria-required="true"
        placeholder="put your github username here (@<username>) (required)"
      />
      <span className="sr-only" id="github-username-info">
        Github usernames must start with @
      </span>
    </div>
  )
}
export default GitHubInput
