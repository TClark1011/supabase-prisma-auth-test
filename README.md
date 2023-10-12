# Combining Supabase Auth With Prisma

1. Follow this tutorial: https://medium.com/@ngoctranfire/using-prisma-with-supabase-row-level-security-and-multi-schema-7c53418adba3

2. Rename the tables to use a proper naming convention, using prisma's `@@map` directive to map the table names to the ones used in the tutorial.

**NOTE:** If you use VSCode's built-in "Rename Symbol" command on the table names it will automatically update the `@@map` directive for you.
