import HttpError from '@wasp/core/HttpError.js'

export const getDebates = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const debates = await context.entities.Debate.findMany({
    where: {
      user: { id: context.user.id }
    }
  });

  return debates;
}

export const getProgress = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const userId = context.user.id;

  const progress = await context.entities.Progress.findUnique({
    where: { userId },
    select: {
      understandingLevel: true,
      engagementScore: true
    }
  });

  return progress;
}

export const getPreferences = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const preferences = await context.entities.Preferences.findUnique({ where: { userId: context.user.id } });

  if (!preferences) { throw new HttpError(404, 'No preferences found for user') };

  return preferences;
}