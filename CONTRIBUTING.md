# Contributing to Repos

Welcome! This guide helps you contribute to this project correctly.

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd repo-name
   ```

2. **Install dependencies:** `npm install`

3. **Start the dev server:** `npm run dev`

## 🌿 Branch Naming Convention

Please follow this format: `type/short-description`

**Examples:**

- `feature/user-login`
- `bugfix/navbar-overlap`
- `hotfix/payment-issue`
- `docs/update-readme`

## ✍️ Making a Contribution

1. **Create a branch:** `git checkout -b feature/your-feature`
2. **Write clean, clear commits:** `git commit -m "feat: add login functionality"`
3. **Push your branch:** `git push origin feature/your-feature`
4. **Open a pull request on GitHub**

## ✅ Pull Request Guidelines

- **1 task = 1 branch = 1 PR**
- Link related issue: `Closes #issue-number`
- Add screenshots for UI changes
- Use meaningful commit messages
- Ask for review
- **Don't merge your own PR**

## 🧪 Code Standards

Before opening your PR, make sure:

```bash
npm run lint
npm run test
npm run build
```

## 🔁 Review & Merge Process

1. Wait for at least one team member approval
2. CI must pass
3. Use **Squash and merge** to keep clean history
4. Delete your branch after merge

## 🧼 After Merge

Delete your branch:

```bash
git push origin --delete feature/your-feature
```

Pull latest main to stay up to date:

```bash
git checkout main
git pull origin main
```

## 📞 Need Help?

Tag a maintainer or ask in your team chat.
