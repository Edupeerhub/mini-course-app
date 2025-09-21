# 🛡️ PR Security Review Checklist

## 1. Authentication & Authorization
- [ ] Are all sensitive endpoints protected with authentication?
- [ ] Are authorization checks (e.g., role-based, attribute-based) enforced at the backend, not just the frontend?
- [ ] Is there any chance of privilege escalation (e.g., normal user acting as admin)?
- [ ] Does the code prevent Insecure Direct Object References (IDOR)?

## 2. Data Protection & Privacy
- [ ] Is sensitive data (PII, passwords, tokens) never logged in plaintext?
- [ ] Is sensitive data stored/transmitted securely (encryption at rest, HTTPS/TLS in transit)?
- [ ] Are passwords/tokens never hardcoded in the codebase?
- [ ] Are secrets managed using a secure vault (not `.env` checked into Git)?

## 3. Input Validation & Output Encoding
- [ ] Are all external inputs validated and sanitized (e.g., user forms, APIs)?
- [ ] Is proper output encoding used to prevent XSS (Cross-Site Scripting)?
- [ ] Are SQL queries parameterized (to prevent SQL Injection)?
- [ ] Is file upload restricted by type, size, and storage location?

## 4. Error Handling & Logging
- [ ] Do error messages avoid exposing stack traces, database queries, or secrets?
- [ ] Is logging configured securely (no sensitive data in logs)?
- [ ] Are security events (e.g., failed logins, access denied) logged for monitoring?

## 5. Dependency & Library Security
- [ ] Are third-party libraries and frameworks up-to-date?
- [ ] Are libraries scanned for known vulnerabilities (e.g., Dependabot, Snyk)?
- [ ] Are only trusted sources used for dependencies?

## 6. Business Logic Security
- [ ] Are workflows checked for logical flaws (e.g., bypassing steps in a payment or patient-record update process)?
- [ ] Does the system enforce limits/rules (e.g., rate-limiting, transaction limits)?
- [ ] Are critical functions protected from replay attacks or duplication (e.g., re-submitting payment requests)?

## 7. General Secure Coding Practices
- [ ] Are API keys, credentials, or tokens avoided in source code?
- [ ] Is cryptography used properly (no weak algorithms like MD5, SHA1, or hardcoded keys)?
- [ ] Is least privilege applied for service accounts and DB connections?
- [ ] Is the PR free of "debug" or "test" code that could expose data?
[PR Security Review Checklist.docx](https://github.com/user-attachments/files/22452799/PR.Security.Review.Checklist.docx)
