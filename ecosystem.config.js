module.exports = {
    apps: [
      {
        name: 'front',
        script: "npm",
        args: "start",
        env: {
          PORT: 3000
        }
      }
    ]
  }
  
  // netstat -ntpl проверка портов
  // pm2 start npm --name "next" -- run start