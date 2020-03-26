import colors from './colors';

export const formStyles = {
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.lighter,
    marginBottom: 5,
  },

  input: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.darkTransparent,
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.white,
  },

  sombra: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

export const buttonStyles = {
  button: {
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    color: colors.primary,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
};
