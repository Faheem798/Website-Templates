import HttpError from '@wasp/core/HttpError.js'

export const createDebate = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { aiDebaterType } = args;
  const { userId } = context.user;

  const debate = await context.entities.Debate.create({
    data: {
      user: { connect: { id: userId } },
      aiDebaterType
    }
  });

  return debate;
}

export const updateProgress = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id }
  });

  if (!user) { throw new HttpError(404) };

  return context.entities.Progress.update({
    where: { id: user.Progress.id },
    data: { understandingLevel: args.understandingLevel, engagementScore: args.engagementScore }
  });
}

export const customizeAI = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id }
  });

  const preferences = await context.entities.Preferences.findUnique({
    where: { userId: context.user.id }
  });

  if (!user || !preferences) { throw new HttpError(404) };

  return context.entities.Preferences.update({
    where: { id: preferences.id },
    data: { aiAppearance: args.appearance, aiPersonality: args.personality, aiBackground: args.background }
  });
}
