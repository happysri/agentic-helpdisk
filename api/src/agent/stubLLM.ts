export class StubLLM {
  classify(text: string) {
    if (text.toLowerCase().includes("password")) return "account";
    if (text.toLowerCase().includes("error")) return "technical";
    return "general";
  }

  draftReply(ticket: { title: string; description: string }) {
    return `Thanks for reporting "${ticket.title}". We are looking into it.`;
  }
}
