# Matchers

Add a test to `app.component.spec.ts`

```typescript
it('should result 4 when add 2 + 2', () => {
    expect(2 + 2).toEqual(4);
  });
```

Run the test and everything is ok.

Now, we will write a failing test.

```typescript
it('should result 5 when add 3 + 2', () => {
    expect(3 + 2).toEqual(3);
  });
```

Run the test and we will see errors.

Jest will not skip the tests after failing one test. Try adding another test after the failing test.
