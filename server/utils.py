import random
import string


def random_string(n):
    result = ''
    for _ in range(10):
        result += random.SystemRandom().choice(
            string.ascii_uppercase + string.digits)
    return result
