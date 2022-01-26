let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
• ISAT [ 085721231659]
• Telkomsel [ 082118862838]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Hydickyy
│ • https://saweria.co/Hydickyy
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi','donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
