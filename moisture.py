import time

# Import the ADS1x15 module.
import Adafruit_ADS1x15
# Create an ADS1115 ADC (16-bit) instance.
adc = Adafruit_ADS1x15.ADS1115()

GAIN = 1

adc.start_adc(0, gain=GAIN)

# Read channel 0 for 5 seconds and print out its values.
print('Reading ADS1x15 channel 0 for 5 seconds...')
# start = time.time()
#while (time.time() - start) <= 5.0:
while True:
    # Read the last ADC conversion value and print it out.
    value = adc.get_last_result()
    print('Channel 0: {0}'.format(value))
    # Sleep for half a second.
    time.sleep(2)

adc.stop_adc()
