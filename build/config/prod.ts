export = {
    Variables: {
        "Variable1": "ProdValue"
    },
    Runtime: "nodejs10.x",
    Role: "{InsertRoleARNHERE}",
    Handler: "package/dist/index.handler",
}
