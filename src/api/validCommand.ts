export const validCommand = (interaction, command) => {
  const member: any = interaction.member;

  if (!member.permissions.has(command.userPermissions || [])) {
    interaction.followUp({
      content: `MEOW! ${interaction.user} Você não tem permissão para usar este comando!`,
    });
    return false;
  }

  return true;
};