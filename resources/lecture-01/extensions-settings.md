# VS Code Extensions and Settings

## Recommended extensions

- **ESLint** (`dbaeumer.vscode-eslint`) displays lint feedback in the editor.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`) formats supported files.

Install extensions from the VS Code Extensions view. The extensions provide editor integration; ESLint and Prettier should also be installed in the project when the assignment requires them.

## Workspace settings

A project can recommend extensions in `.vscode/extensions.json` and share editor settings in `.vscode/settings.json`. For example:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

Keep shared project settings separate from personal editor preferences.
