type QuizMode = 'verb_fixed' | 'particle_fixed';

export class QuizService{
  // 70%の確率で前のモードを維持し、30%で切り替える
  determineNextMode(lastMode?: QuizMode): QuizMode {
    if (!lastMode) {
      return Math.random() < 0.5 ? 'verb_fixed' : 'particle_fixed';
    }
    const stay = Math.random() < 0.7;
    if (stay) return lastMode;
    return lastMode === 'verb_fixed' ? 'particle_fixed' : 'verb_fixed';
  }

  async generateNextQuiz(lastMode?: QuizMode, lastWord?: string) {
    const currentMode = this.determineNextMode(lastMode);

    // TODO: Prismaからクエリを発行して選択肢と問題を生成する処理
    return {
      currentMode,
      fixedWord: "take",
      question: "take ____ (意味: 離陸する、脱ぐ)",
      correctAnswer: "off",
      options: ["off", "on", "up", "away"]
    };
  }
}