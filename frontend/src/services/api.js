export async function sendMessage(chatHistory) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reply:
          "Baik 👍 Bisa kamu ceritakan kamu lebih sering bersepeda di jalan aspal, tanah, atau trek lumpur?"
      });
    }, 1000);
  });
}
